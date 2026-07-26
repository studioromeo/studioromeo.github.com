---
title: "Swapping Thonny for Neovim to Dev on my Pico"
summary: "How to program a pico without Thonny using neovim and mpremote"
tags:
    - Pico
    - Embedded
    - Neovim
---

Like most devs, I tend to swap around editors quite a bit. I've been through a few: Sublime, Coda, Atom, PHPStorm, Eclipse, Visual Studio, VS Code...the list goes on. Lately I've been learning to use neovim (maybe I'll write a post on that) but for the pico I stuck with the default recommended editor Thonny.

Thonny is great for what it is, it makes it easy to get going with the pico and gives you easy ways to put code onto the pico, install packages, and a REPL, its the complete package! But it's not my editor. It doesn't have my theme and as I'm getting used to vim motions going back to a more traditional text editor drags me out of that mindset.

Programming on the Pico isn't like a traditional website however. I need to be able to put the code on the pico, run it and see the output to see what I did wrong! I hope thats the right terminology but I'm relatively new to embedded programming.

## My setup

Instead of Thonny I use:

- **Neovim + Kickstart**: Out of scope for this post but its just neovim with kickstart. `pyright` as my lsp
- **mpremote**: This bridges the gap between my mac and my pico. It lets me run scripts on the pico.
- **micropython-rp2-stubs**: Will get into this later but without this pyright complains about `import machine`

## Setting up neovim and pyright

1. In neovim under the lsp settings I added the `pyright` key to enable the python lsp. I'm not sure if this is needed for everything but I assume it is, I need to learn more here.

```lua
	local servers = {
		pyright = {},
```

2. Doing this means I have syntax highlighting which is great but as I mentioned earlier `import machine` throws up an error as this exists on the pico but not locally on my project so what we need to do is setup a virtual env and install `micropython-rp2-stubs`.

```
python3 -m venv .venv
source .venv/bin/activate.fish # Note for fish shell users!
pip install micropython-rp2-stubs
```

3. After this I need to add `pyrightconfig.json` to tell the lsp that we have some packages to look at
```json
{
  "venvPath": ".",
  "venv": ".venv",
  "reportMissingImports": "none"
}
```

One thats been done all seems to be fine. I do get a warning but thats better than an error! If I figure out a better solution I'll update this post.

## The workflow

Okay I'm all good to go. Now when I want to work on my pico projects I can plug my pico into the mac and then:

1. cd into my project directory
2. Open neovim in a pane, then split it with another shell
3. Run scripts I'm editing using `mpremote run <script>`
4. When I'm happy with the final script i can run `mpremote fs cp <script> :<script>`

Another way to do this is to use `mpremote mount .` and this will mount the entire directory on the pico and drops us into the REPL. We can then run scripts by typing `import <script>`. I prefer the simplicity of `mpremote run` but just wanted to call this out as another option.

