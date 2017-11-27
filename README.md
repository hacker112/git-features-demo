[Back to demos](https://github.com/hacker112/git-features-demo/tree/master)

## git add -p

```bash
# Checkout demo/add-p branch
git checkout demo/add-p

# Prepare repo for trying add -p
./prepare.sh

# Look what's changed
git status
git diff

# Try git add -p 
git add -p code

# Look what is staged (in index) and what is in working directory
git status
git diff
git diff --staged

# Now commit the changes you have chosen to include
git commit

# Look at the status
git status
git diff

# When you are done playing. Reset the state of the index and working directory
git reset HEAD code
git checkout code
```