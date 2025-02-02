// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type { Config } from 'jest';

const config: Config = {
  preset: '../../jest-preset.js',
  testEnvironment: '<rootDir>/jest-environment-jsdom.js',
  moduleNameMapper: {
    '(.+)\\.js': '$1', // https://connect.build/docs/web/supported-browsers-and-frameworks/#jest
  },
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
};

export default config;
