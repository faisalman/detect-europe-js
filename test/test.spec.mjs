import { test, expect } from '@playwright/test';
import path from 'path';
import url from 'url';

const localHtml = `file://${path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '../')}/test/test.html`;

const reloadAndTest = (fun, tz, exp) => {
    const init = (tz) => {
        Object.defineProperty(Intl, 'DateTimeFormat', {
            value: () => {
                return { resolvedOptions : () => { return { timeZone : tz }}}
            }
        });
    };
    test(tz, async ({ page }) => {
        await page.addInitScript(init, tz);
        await page.goto(localHtml);
        const res = await page.evaluate(fun);
        expect(res).toBe(exp);
    });
}

test.describe('isFromEU()', () => {
    test.describe('EU in Europe', () => {
        reloadAndTest(() => isFromEU(), 'Europe/Brussels', true);
        reloadAndTest(() => isFromEU(), 'Europe/Paris', true);
    });
    test.describe('EU outside Europe', () => {
        reloadAndTest(() => isFromEU(), 'Indian/Mayotte', true);
        reloadAndTest(() => isFromEU(), 'America/Cayenne', true);
    });
    test.describe('Non-EU in Europe', () => {
        reloadAndTest(() => isFromEU(), 'Europe/London', false);
        reloadAndTest(() => isFromEU(), 'Europe/Zurich', false);
    });
    test.describe('Others', () => {
        reloadAndTest(() => isFromEU(), 'Asia/Jakarta', false);
        reloadAndTest(() => isFromEU(), 'Asia/Pontianak', false);
    });
});

test.describe('isFromEFTA()', () => {
    reloadAndTest(() => isFromEFTA(), 'Europe/Zurich', true);
    reloadAndTest(() => isFromEFTA(), 'Asia/Jayapura', false);
});