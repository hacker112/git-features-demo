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

# Run the rebase interactively
git rebase --interactive demo/rebase
# or
git rebase -i demo/rebase

# look at the tree afterwards
git tree

# There is an error in a previous commit let us fix it and the rebase interactively
git commit --fixup=<commit>
# The run:
git rebase -i --autosquash demo/rebase
```

### Merge instead
```bash
# Delete the rebases branches
git branch -D demo/rebase-clean
git branch -D demo/rebase-conflict
```

#### Clean merge
```bash
# Checkout branch
git checkout demo/rebase

# Merge demo/rebase-clean into demo/rebase
git merge demo/rebase-clean
```

#### Conflict merge
```bash
# Checkout branch
git checkout demo/rebase-conflict
# Merge demo/rebase into demo/rebase-conflict
git merge demo/rebase

#
# Fix the merge conflicts
#

# Checkout branch
git checkout demo/rebase
# Merge demo/rebase-configt into demo/rebase
git merge demo/rebase-clean
```

