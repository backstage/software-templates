<!--- Use this template to create a command reference. Replace **foo** in the title with the name of your command, and replace other mockup content with information applicable for your command. --->

# foo command reference


## Name

**foo** - frobnicate the bar library

## Synopsis

`foo` [`-bar`] [``-c config-file` ] file ...

## Description

**foo** frobnicates the **bar** library by tweaking internal symbol tables. By default it parses all `baz` segments and rearranges them in reverse order by time for the **xyzzy** linker to find them. The `symdef` entry is then compressed using the WBG (Whiz-Bang-Gizmo) algorithm.  All files are processed in the order specified.

## Options

`-b`
Do not write `busy` to **stdout** while processing.

`-c config-file`
Use the alternate system-wide config-file  instead  of `etc/foo.conf`. This overrides any `FOOCONF` environment variable.

`-a`
In addition to the `baz` segments, also parse the  `blurfl` headers.

`-r`
Recursive mode. Operates as fast as lightning at the expense of a megabyte of virtual memory.

## Files

`/etc/foo.conf`
The system wide configuration file.
	
`~/.foorc`
Per user configuration file.

## Environment

`FOOCONF`
If non-null the full pathname for an alternate system-wide `foo.conf`. Overridden by the `-c` option.


## Diagnostics

The following diagnostics may be issued on **stderr**:

`Bad magic number.`
The input file does not look like an archive file.

`Old style baz segments.`
foo can only handle new style `baz` segments. COBOL object libraries are not supported in this version.

## Known Issues

- The command name should have been chosen more carefully to reflect its purpose.

## See Also

**bar**, **foo**, **xyzzy**




