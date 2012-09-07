/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *
 * Contributor(s):
 * 
 *
 *
 * ***** END LICENSE BLOCK ***** */

/*
  THIS FILE WAS AUTOGENERATED BY theme_mode.tmpl.js

  IT MIGHT NOT BE PERFECT, PARTICULARLY:

  IN DECIDING STATES TO TRANSITION TO,

  IGNORING WHITESPACE, 

  EXTENDING EXISTING MODES,

  GATHERING KEYWORDS, OR

  RULE PREFERENCE ORDER.

  ...But it's a good start from an existing *.tmlanguage file.
*/

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var JadeHighlightRules = function() {

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = 
        {
    "start": [
        {
            "token": {
                "1": {
                    "name": "keyword.control.import.include.jade"
                }
            },
            "regex": "^\\s*\\b(include)\\b"
        },
        {
            "token": "keyword.other.doctype.jade",
            "regex": "^(!!!)(\\s*[a-zA-Z0-9-_]+)?"
        },
        {
            "token": {
                "1": {
                    "name": "punctuation.section.comment.jade"
                }
            },
            "regex": "^ *(//)\\s*\\S.*$\\n?"
        },
        {
            "token": {
                "2": {
                    "name": "punctuation.section.comment.jade"
                }
            },
            "regex": "^(\\s*)(//)\\s*$",
            "next": "state_4"
        },
        {
            "token": {
                "2": {
                    "name": "entity.name.function.jade"
                }
            },
            "regex": "^(\\s*)(\\:markdown)",
            "next": "state_5"
        },
        {
            "token": {
                "2": {
                    "name": "entity.name.function.jade"
                }
            },
            "regex": "^(\\s*)(\\:sass)",
            "next": "state_6"
        },
        {
            "token": {
                "2": {
                    "name": "entity.name.function.jade"
                }
            },
            "regex": "^(\\s*)(\\:less)",
            "next": "state_7"
        },
        {
            "token": {
                "2": {
                    "name": "entity.name.function.jade"
                }
            },
            "regex": "^(\\s*)(\\:coffeescript)",
            "next": "state_8"
        },
        {
            "token": {
                "2": {
                    "name": "entity.name.function.jade"
                }
            },
            "regex": "^(\\s*)(\\:cdata)",
            "next": "state_9"
        },
        // match stuff like: mixin dialog-title-desc(title, desc)
        {
            "token": {
                "1": {
                    "name": "storage.type.function.jade"
                },
                "2": {
                    "name": "entity.name.function.jade"
                },
                "3": {
                    "name": "punctuation.definition.parameters.begin.jade"
                },
                "4": {
                    "name": "variable.parameter.function.jade"
                },
                "5": {
                    "name": "punctuation.definition.parameters.end.jade"
                }
            },
            "regex": "^\\s*(mixin) ([\\w\\-]+)\\s*(\\()(.*?)(\\))"
        },
        // match stuff like: mixin dialog-title-desc
        {
            "token": {
                "1": {
                    "name": "storage.type.function.jade"
                },
                "2": {
                    "name": "entity.name.function.jade"
                }
            },
            "regex": "^\\s*(mixin) ([\\w\\-]+)"
        },
        {
            "regex": "^\\s*(-|=|!=)",
            "next": "state_12"
        },
        {
            "token": {
                "2": {
                    "name": "entity.name.tag.script.jade"
                }
            },
            "regex": "^(\\s*)(script)",
            "next": "state_13"
        },
        {
            "token": "string.interpolated.jade",
            "regex": "[#!]\\{[^\\}]+\\}"
        },
        // Match any tag, id or class. skip AST filters
        {
            "token": {
                "1": {
                    "name": "meta.tag.any.jade"
                },
                "2": {
                    "name": "entity.name.tag.jade"
                }
            },
            "regex": "^\\s*(?!\\w+\\:)(?:(([\\w]+))|(?=\\.|#))",
            "next": "state_15"
        },
        {
            "regex": "(?<=\\w)\\s*\\(",
            "next": "state_16"
        }
    ],
    "state_4": [
        {
            "token": "TODO",
            "regex": "^(?!\\1\\s+)",
            "next": "start"
        },
        {
            "token": "TODO",
            "regex": ".+",
            "next": "state_4"
        }
    ],
    "state_5": [
        {
            "include": "text.html.markdown"
        },
        {
            "token": "TODO",
            "regex": "^(?!\\1\\s+)",
            "next": "start"
        }
    ],
    "state_6": [
        {
            "include": "source.sass"
        },
        {
            "token": "TODO",
            "regex": "^(?!\\1\\s+)",
            "next": "start"
        }
    ],
    "state_7": [
        {
            "include": "source.css.less"
        },
        {
            "token": "TODO",
            "regex": "^(?!\\1\\s+)",
            "next": "start"
        }
    ],
    "state_8": [
        {
            "include": "source.coffee"
        },
        {
            "token": "TODO",
            "regex": "^(?!\\1\\s+)",
            "next": "start"
        }
    ],
    "state_9": [
        {
            "token": "TODO",
            "regex": "^(?!\\1\\s+)",
            "next": "start"
        },
        {
            "token": "TODO",
            "regex": ".+",
            "next": "state_9"
        }
    ],
    "state_12": [
        {
            "include": "source.js"
        },
        {
            "token": "keyword.control.js",
            "regex": "\\b(each)\\b"
        },
        {
            "token": "TODO",
            "regex": "$",
            "next": "start"
        }
    ],
    "state_13": [
        {},
        {
            "include": "source.js"
        },
        {
            "token": "TODO",
            "regex": "^((?=(\\1)([\\w#\\.]|$\\n?))|^$\\n?)",
            "next": "start"
        }
    ],
    "state_15": [
        {
            "token": "meta.tag.attribute.class.jade",
            "regex": "\\.[\\w-]+"
        },
        {
            "token": "meta.tag.attribute.id.jade",
            "regex": "#[\\w-]+"
        },
        {
            "token": "TODO",
            "regex": "$|(?!\\.|#|=|-)",
            "next": "start"
        }
    ],
    "state_16": [
        {
            "include": "#tag-stuff"
        },
        {
            "token": "TODO",
            "regex": "\\)",
            "next": "start"
        }
    ]
}
};

oop.inherits(JadeHighlightRules, TextHighlightRules);

exports.JadeHighlightRules = JadeHighlightRules;
});