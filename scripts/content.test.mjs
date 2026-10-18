import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
const resources=JSON.parse(await readFile(new URL('../lib/resources.json',import.meta.url)));
test('all 241 live-site resources and 12 published categories are retained',()=>{assert.equal(resources.length,241);assert.equal(new Set(resources.map(r=>r.category)).size,12);for(const r of resources){assert.ok(r.name&&r.category&&r.description);assert.ok(!r.url||r.url.startsWith('https://')||r.url.startsWith('http://'));}});
test('known source contacts remain paired with the right resource',()=>{assert.equal(resources.find(r=>r.name==='Augusta Vet Center').phone,'706-729-5762');assert.equal(resources.find(r=>r.name==='Golden Harvest Food Bank').phone,'706-736-1119');assert.equal(resources.find(r=>r.name==='Tonya Price - Accredited Claims Agent').phone,'762-224-2331');});
test('all six pages and supplied/local assets exist',async()=>{for(const p of ['app/page.tsx','app/about/page.tsx','app/services/page.tsx','app/resource-center/page.tsx','app/get-involved/page.tsx','app/contact/page.tsx','public/assets/vsa-approved-logo.png','public/assets/community.webp','public/assets/tonya-price.webp','public/assets/thank-you.webp','public/assets/support.webp'])await access(new URL('../'+p,import.meta.url));});
test('donation link is the existing VSA payment destination',async()=>{const c=await readFile(new URL('../lib/content.ts',import.meta.url),'utf8');assert.ok(c.includes('https://www.paypal.com/ncp/payment/TJWX8HT7WPP8Q'));});
