/*
 * Copyright (c) 2010, 2024 BSI Business Systems Integration AG
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */
import {App} from '@eclipse-scout/demo-jswidgets';
import {access} from '@eclipse-scout/core';

App.addBootstrapper(() => access.bootstrapSystem());

new App().init({
  bootstrap: {
    textsUrl: 'res/texts.json'
  }
});

