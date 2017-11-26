[Back to demos](https://github.com/hacker112/git-features-demo/tree/master)

## Rebase

### Preconditions
**git tree** as alias:

    git config --global alias.tree 'log --graph --decorate --pretty=oneline --abbrev-commit --all'

### Clean rebase
```bash
# Checkout branch
git checkout demo/rebase-clean

# Run the rebase
git rebase demo/rebase
# Done
```

### Rebase with confict
```bash
# Checkout branch
git checkout demo/rebase-conflict

# Run the rebase
git rebase demo/rebase

# Follow the instructions git gives you
```

### Interactive Rebase
```bash
# Checkout branch
git checkout demo/rebase-interactive

# Run the rebase
git rebase -i demo/rebase
```