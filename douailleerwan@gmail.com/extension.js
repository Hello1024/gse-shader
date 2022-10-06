//  GNOME Shell Extension Shader
//  Copyright (C) 2016 douaille
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
//  Douaille Erwan <douailleerwan@gmail.com>

const Main = imports.ui.main;

const ExtensionUtils = imports.misc.extensionUtils;
const Me             = ExtensionUtils.getCurrentExtension();

const ShaderMenu       = Me.imports.shaderMenu;
const ShaderModifier = Me.imports.shaderModifier;

let shaderMenu;
let shaderModifier;

function init(metadata) {
  shaderModifier = new ShaderModifier.ShaderModifier(global.stage);
}

function enable() {
  shaderMenu = new ShaderMenu.ShaderMenu(shaderModifier);
  Main.panel.addToStatusArea('shaderMenu', shaderMenu);
}

function disable() {
  shaderMenu.destroy();
  //shaderModifier.destroy();
};
