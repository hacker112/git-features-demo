# git-features-demo
git features demo for git presentations

## Setup

```bash
git clone https://github.com/hacker112/git-features-demo.git
cd git-features-demo
```

## Bisect

The `./bisect-test.sh` will echo "OK" for a good 

Checkout demo-bisect and start bisect:

```bash
# Starting point
git checkout demo-bisect-good
# Test it functionality
./bisect-test.sh # Should echo "OK"

# Start bisecting
git bisect start
# Mark this revision as a good one
git bisect good

# Checkout the bad revision
git checkout demo-bisect-bad
./bisect-test.sh # Should echo "BAD"
# mark it as a bad 
git bisect bad
```

Iterate until you found the correct version:
```bash
# if bad
git bisect bad
# if good
git bisect good
```

Which revision is the bad one?

```bash
# Run bisect reset when you are done using bisect
git bisect reset
```

Want to make it more automatic you can specify a command that we expect to return non zero when revision is bad:

```bash
git bisect reset
git bisect start
git bisect bad demo-bisect-bad
git bisect good demo-bisect-good
# Make sure that we run the ./bisect-test.sh command every time we test a commit
git bisect run ./bisect-test.sh
```