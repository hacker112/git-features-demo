[Back to demos](https://github.com/hacker112/git-features-demo/tree/master)

## Word diff

```bash
# Checkout demo/diff-word branch
git checkout demo/diff-word

# Prepare repo for trying word diff
./prepare.sh

# Test diff options (no whitespace)
git diff -w
# Different word diffs
git diff -w --word-diff=color
git diff -w --color-words=.
git diff -w --color-words='\w+|.'

# Like any of them? Add them as as an alias
git config --global alias.diff-word "diff -w --color-words='\w+|.'"
# Now you can call it simpler next time.
git diff-word

# When you are done playing. Reset the state of the index and working directory
git reset HEAD code
git checkout code
```