var extensions = {
	"groovy": "groovy",
	"ini": "properties",
	"properties": "properties",
	"css": "css",
	"scss": "css",
	"html": "htmlmixed",
	"htm": "htmlmixed",
	"shtm": "htmlmixed",
	"shtml": "htmlmixed",
	"xhtml": "htmlmixed",
	"cfm": "htmlmixed",
	"cfml": "htmlmixed",
	"cfc": "htmlmixed",
	"dhtml": "htmlmixed",
	"xht": "htmlmixed",
	"tpl": "htmlmixed",
	"twig": "htmlmixed",
	"hbs": "htmlmixed",
	"handlebars": "htmlmixed",
	"kit": "htmlmixed",
	"jsp": "htmlmixed",
	"aspx": "htmlmixed",
	"ascx": "htmlmixed",
	"asp": "htmlmixed",
	"master": "htmlmixed",
	"cshtml": "htmlmixed",
	"vbhtml": "htmlmixed",
	"ejs": "htmlembedded",
	"dust": "htmlembedded",
	"erb": "htmlembedded",
	"js": "javascript",
	"jsx": "javascript",
	"jsm": "javascript",
	"_js": "javascript",
	"vbs": "vbscript",
	"vb": "vb",
	"json": "javascript",
	"xml": "xml",
	"svg": "xml",
	"wxs": "xml",
	"wxl": "xml",
	"wsdl": "xml",
	"rss": "xml",
	"atom": "xml",
	"rdf": "xml",
	"xslt": "xml",
	"xsl": "xml",
	"xul": "xml",
	"xbl": "xml",
	"mathml": "xml",
	"config": "xml",
	"plist": "xml",
	"xaml": "xml",
	"php": "php",
	"php3": "php",
	"php4": "php",
	"php5": "php",
	"phtm": "php",
	"phtml": "php",
	"ctp": "php",
	"c": "clike",
	"h": "clike",
	"i": "clike",
	"cc": "clike",
	"cp": "clike",
	"cpp": "clike",
	"c++": "clike",
	"cxx": "clike",
	"hh": "clike",
	"hpp": "clike",
	"hxx": "clike",
	"h++": "clike",
	"ii": "clike",
	"ino": "clike",
	"cs": "clike",
	"asax": "clike",
	"ashx": "clike",
	"java": "clike",
	"scala": "clike",
	"sbt": "clike",
	"coffee": "coffeescript",
	"cf": "coffeescript",
	"cson": "coffeescript",
	"_coffee": "coffeescript",
	"clj": "clojure",
	"cljs": "clojure",
	"cljx": "clojure",
	"pl": "perl",
	"pm": "perl",
	"rb": "ruby",
	"ru": "ruby",
	"gemspec": "ruby",
	"rake": "ruby",
	"py": "python",
	"pyw": "python",
	"wsgi": "python",
	"sass": "sass",
	"lua": "lua",
	"sql": "sql",
	"diff": "diff",
	"patch": "diff",
	"md": "markdown",
	"markdown": "markdown",
	"mdown": "markdown",
	"mkdn": "markdown",
	"yaml": "yaml",
	"yml": "yaml",
	"hx": "haxe",
	"sh": "shell",
	"command": "shell",
	"bash": "shell"
}

var sublimeBindings = {
	"Alt-Left": "goSubwordLeft",
	"Alt-Right": "goSubwordRight",
	"Ctrl-Up": "scrollLineUp",
	"Ctrl-Down": "scrollLineDown",
	"Shift-Ctrl-L": "splitSelectionByLine",
	"Shift-Tab": "indentLess",
	"Esc": "singleSelectionTop",
	"Ctrl-L": "selectLine",
	"Shift-Ctrl-K": "deleteLine",
	"Ctrl-Enter": "insertLineAfter",
	"Shift-Ctrl-Enter": "insertLineBefore",
	"Ctrl-D": "selectNextOccurrence",
	"Shift-Ctrl-Space": "selectScope",
	"Shift-Ctrl-M": "selectBetweenBrackets",
	"Ctrl-M": "goToBracket",
	"Shift-Ctrl-Up": "swapLineUp",
	"Shift-Ctrl-Down": "swapLineDown",
	"Ctrl-/": "toggleCommentIndented",
	"Ctrl-J": "joinLines",
	"Shift-Ctrl-D": "duplicateLine",
	"Ctrl-T": "transposeChars",
	"F9": "sortLines",
	"Ctrl-F9": "sortLinesInsensitive",
	"F2": "nextBookmark",
	"Shift-F2": "prevBookmark",
	"Ctrl-F2": "toggleBookmark",
	"Shift-Ctrl-F2": "clearBookmarks",
	"Alt-F2": "selectBookmarks",
	"Ctrl-W": "wrapLines",
	"Ctrl-K Ctrl-Backspace": "delLineLeft",
	"Backspace": "smartBackspace",
	"Ctrl-K Ctrl-K": "delLineRight",
	"Ctrl-K Ctrl-U": "upcaseAtCursor",
	"Ctrl-K Ctrl-L": "downcaseAtCursor",
	"Ctrl-K Ctrl-Space": "setSublimeMark",
	"Ctrl-K Ctrl-A": "selectToSublimeMark",
	"Ctrl-K Ctrl-W": "deleteToSublimeMark",
	"Ctrl-K Ctrl-X": "swapWithSublimeMark",
	"Ctrl-K Ctrl-Y": "sublimeYank",
	"Ctrl-K Ctrl-G": "clearBookmarks",
	"Ctrl-K Ctrl-C": "showInCenter",
	"Ctrl-Alt-Up": "selectLinesUpward",
	"Ctrl-Alt-Down": "selectLinesDownward",
	"Ctrl-F3": "findUnder",
	"Shift-Ctrl-F3": "findUnderPrevious",
	"Shift-Ctrl-[": "fold",
	"Shift-Ctrl-]": "unfold",
	"Ctrl-K Ctrl-J": "unfoldAll",
	"Ctrl-K Ctrl-0": "unfoldAll",
	"Ctrl-H": "replace",
}
function options() {
	return {
		format: {
			indent: {
				style: $('#indentStyle').val().toString(),
				base: $('#baseIndent').val().toInt(),
				adjustMultilineComment: false
			},
			newline: '\n',
			space: ' ',
			json: false,
			renumber: false,
			hexadecimal: false,
			quotes: $('#quotes').val().toString(),
			escapeless: false,
			compact: false,
			parentheses: true,
			semicolons: $('#semicolons').is(':checked'),
			bracketFormat: $('#bracketFormat').is(':checked')
		},
		parse: null
	}
}