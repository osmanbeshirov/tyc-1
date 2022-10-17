# tyc-1

# Benefits
1. Static typing
2. Code completion
3. Refactoring
4. Shorthand notations

# Drawbacks
1. Compilation or Transpolation
2. Need to discipline

# INSTALLATION
npm install -g typescript
check your version:
tsc -v

# Coding by TS
1. Show your ts codes by simply JS file(by create):
folder/file tsc index.ts

# Open to your TSC config file
tsc --init
# Valuable settings in congig file
1. "target"
2. "module"
3. "rootDir"
4. "outDir"
5. "removeComments"
6. "noEmitOnError"

# Debugging in TS
1. uncomment to "sourceMap" in emmit section
2. The second you going to set "preLaunchTask": "tsc: build - tsconfig.json" to  "preLaunchTask": "tsc: build - tsconfig.json" - which is located in launch.json into the debugging section in visual code.



