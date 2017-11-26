[Back to demos](https://github.com/hacker112/git-features-demo/tree/master)

## Rebase

### Preconditions
**git tree** as alias:

    git config --global alias.tree 'log --graph --decorate --pretty=oneline --abbrev-commit --all'

### Clean rebase
```bash
# Checkout branch
git checkout demo/rebase-clean

# look at the tree
git tree

# Run the rebase
git rebase demo/rebase

# look at the tree afterwars
git tree

```

### Rebase with confict
```bash
# Checkout branch
git checkout demo/rebase-conflict

# look at the tree
git tree

# Run the rebase
git rebase demo/rebase

# Follow the instructions git gives you

# look at the tree afterwars
git tree
```

### Interactive Rebase
```bash
# Checkout branch
git checkout demo/rebase-interactive

# look at the tree
git tree

# Run the rebase
git rebase -i demo/rebase

# look at the tree afterwards
git tree


```