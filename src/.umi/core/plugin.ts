// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import * as Plugin_0 from '/Users/zxwsunny/personnalPromotCode/recruitNew/src/app.ts';
import * as Plugin_1 from '/Users/zxwsunny/personnalPromotCode/recruitNew/src/.umi/plugin-access/runtime.tsx';
import * as Plugin_2 from '/Users/zxwsunny/personnalPromotCode/recruitNew/src/.umi/plugin-initialState/runtime.tsx';
import * as Plugin_3 from '/Users/zxwsunny/personnalPromotCode/recruitNew/src/.umi/plugin-layout/runtime.tsx';
import * as Plugin_4 from '/Users/zxwsunny/personnalPromotCode/recruitNew/src/.umi/plugin-model/runtime.tsx';
import { PluginManager } from 'umi';

export function getPlugins() {
  return [
    {
      apply: Plugin_0,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/Users/zxwsunny/personnalPromotCode/recruitNew/src/app.ts',
    },
    {
      apply: Plugin_1,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/Users/zxwsunny/personnalPromotCode/recruitNew/src/.umi/plugin-access/runtime.tsx',
    },
    {
      apply: Plugin_2,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/Users/zxwsunny/personnalPromotCode/recruitNew/src/.umi/plugin-initialState/runtime.tsx',
    },
    {
      apply: Plugin_3,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/Users/zxwsunny/personnalPromotCode/recruitNew/src/.umi/plugin-layout/runtime.tsx',
    },
    {
      apply: Plugin_4,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/Users/zxwsunny/personnalPromotCode/recruitNew/src/.umi/plugin-model/runtime.tsx',
    },
  ];
}

export function getValidKeys() {
  return ['patchRoutes','patchClientRoutes','modifyContextOpts','rootContainer','innerProvider','i18nProvider','accessProvider','dataflowProvider','outerProvider','render','onRouteChange','getInitialState','layout','request','qiankun',];
}

let pluginManager = null;
export function createPluginManager() {
  pluginManager = PluginManager.create({
    plugins: getPlugins(),
    validKeys: getValidKeys(),
  });
  return pluginManager;
}

export function getPluginManager() {
  return pluginManager;
}
