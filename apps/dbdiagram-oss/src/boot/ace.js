import { boot } from 'quasar/wrappers';
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/ext-beautify.js';
import 'ace-builds/src-noconflict/ext-code_lens.js';
import 'ace-builds/src-noconflict/ext-elastic_tabstops_lite.js';
import 'ace-builds/src-noconflict/ext-emmet.js';
import 'ace-builds/src-noconflict/ext-error_marker.js';
import 'ace-builds/src-noconflict/ext-hardwrap.js';
import 'ace-builds/src-noconflict/ext-keybinding_menu.js';
import 'ace-builds/src-noconflict/ext-language_tools.js';
import 'ace-builds/src-noconflict/ext-linking.js';
import 'ace-builds/src-noconflict/ext-modelist.js';
import 'ace-builds/src-noconflict/ext-options.js';
import 'ace-builds/src-noconflict/ext-prompt.js';
import 'ace-builds/src-noconflict/ext-rtl.js';
import 'ace-builds/src-noconflict/ext-searchbox.js';
import 'ace-builds/src-noconflict/ext-settings_menu.js';
import 'ace-builds/src-noconflict/ext-spellcheck.js';
import 'ace-builds/src-noconflict/ext-split.js';
import 'ace-builds/src-noconflict/ext-static_highlight.js';
import 'ace-builds/src-noconflict/ext-statusbar.js';
import 'ace-builds/src-noconflict/ext-textarea.js';
import 'ace-builds/src-noconflict/ext-themelist.js';
import 'ace-builds/src-noconflict/ext-whitespace.js';

import 'ace-builds/src-noconflict/keybinding-emacs.js';
import 'ace-builds/src-noconflict/keybinding-sublime.js';
import 'ace-builds/src-noconflict/keybinding-vim.js';
import 'ace-builds/src-noconflict/keybinding-vscode.js';

import 'ace-builds/src-noconflict/theme-ambiance.js';
import 'ace-builds/src-noconflict/theme-chaos.js';
import 'ace-builds/src-noconflict/theme-chrome.js';
import 'ace-builds/src-noconflict/theme-clouds.js';
import 'ace-builds/src-noconflict/theme-clouds_midnight.js';
import 'ace-builds/src-noconflict/theme-cobalt.js';
import 'ace-builds/src-noconflict/theme-crimson_editor.js';
import 'ace-builds/src-noconflict/theme-dawn.js';
import 'ace-builds/src-noconflict/theme-dracula.js';
import 'ace-builds/src-noconflict/theme-dreamweaver.js';
import 'ace-builds/src-noconflict/theme-eclipse.js';
import 'ace-builds/src-noconflict/theme-github.js';
import 'ace-builds/src-noconflict/theme-gob.js';
import 'ace-builds/src-noconflict/theme-gruvbox.js';
import 'ace-builds/src-noconflict/theme-idle_fingers.js';
import 'ace-builds/src-noconflict/theme-iplastic.js';
import 'ace-builds/src-noconflict/theme-katzenmilch.js';
import 'ace-builds/src-noconflict/theme-kr_theme.js';
import 'ace-builds/src-noconflict/theme-kuroir.js';
import 'ace-builds/src-noconflict/theme-merbivore.js';
import 'ace-builds/src-noconflict/theme-merbivore_soft.js';
import 'ace-builds/src-noconflict/theme-monokai.js';
import 'ace-builds/src-noconflict/theme-mono_industrial.js';
import 'ace-builds/src-noconflict/theme-nord_dark.js';
import 'ace-builds/src-noconflict/theme-one_dark.js';
import 'ace-builds/src-noconflict/theme-pastel_on_dark.js';
import 'ace-builds/src-noconflict/theme-solarized_dark.js';
import 'ace-builds/src-noconflict/theme-solarized_light.js';
import 'ace-builds/src-noconflict/theme-sqlserver.js';
import 'ace-builds/src-noconflict/theme-terminal.js';
import 'ace-builds/src-noconflict/theme-textmate.js';
import 'ace-builds/src-noconflict/theme-tomorrow.js';
import 'ace-builds/src-noconflict/theme-tomorrow_night.js';
import 'ace-builds/src-noconflict/theme-tomorrow_night_blue.js';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright.js';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties.js';
import 'ace-builds/src-noconflict/theme-twilight.js';
import 'ace-builds/src-noconflict/theme-vibrant_ink.js';
import 'ace-builds/src-noconflict/theme-xcode.js';

import 'ace-builds/src-noconflict/worker-base.js';

import workerJsonUrl from 'file-loader?type=commonjs|target=es5|esModule=false!app/public/mode-dbml.js'; // For webpack / vue-cli

console.log({ workerJsonUrl });

export default boot(({ app }) => {
  ace.config.setModuleUrl('ace/mode/dbml', workerJsonUrl);

  const themes = ace.require('ace/ext/themelist');
});
