

- Corpus CRUD API
    - see puddle-corpus repo...
- puddle-corpus
    - see puddle-corpus repo...
- puddle-hub
    - see puddle-corpus repo...
- puddle-syntax
    - Provides conversions between:
    - string
    - code
    - term
    - tree
- puddle-editor
    - Conforms to Corpus CRUD API
    - works in memory only
    - handles synchronization logic
    - handles corpus validation logic
    - Local API
    	var validator = require(‘pomagma.analyst’).connect();
        var editor = new Editor(validator);
        - .createAssertion() => [id, node, ] // reverts other work
        - .createDefinition(variableName) => [id, node, actions]
        - // reverts other work, moves cursor to this new line
        
        - .onChange(‘actions’,function) // for display
        - .onChange(‘line’,function(id)) // corpus?
        - .onChange(‘cursor’,function)
        - .onChange(‘validity’,function(?))
        
        - .getCorpus() => ...enough information to render corpus...
        - gives possible cursor positions
        - list of actions
        - id of each line in corpus
        - //.moveCursorToLine(id)
        - //.moveCursorWithinLine(direction) // up, down, left, right
        - .moveCursorToNode(id, [1,4,2,0,1])
        - .setCursorPos(id, [optional tree pos]) => (tree,actions)
        - .updateNode(node) => (tree,actions)
        - .performAction(action) => (tree,actions)
        - on(variousEvent, callback) // is this reasonable?
    - Actions:
        - checkout line (should be implicit upon first edit)
        - commit line
        - revert line (should be implicit if moving without committing)
        - remove line (only allowed if other lines do not depend on this line)
        - move within line
        - various term modifications…
        - insert global variable (requires dialog or search or something)
        - Proposed Actions (not yet implemented):
        - Globally rename a variable (touches many lines)
        - Factor out a subterm as definition
        - Factor in, replacing a variable by its definition
        - Move cursor to definition of variable under cursor
        - Move cursor to occurrence of variable defined by current line
- puddle-cli
    - Built on top of puddle-editor
    - Single-user
    - Minimum dependencies
    - Easy to fix
    - Load/dump to file
    - Single-user ?
    - Uses terminal or optionally blessed library
- puddle-html5
    - see puddle-corpus repo...    
- puddle-d3
    - Visualisation engine
    - Can’t edit, view only
    - Syncs in realtime
    - Runs in a separate browser window/different machine?
    - Uses puddle-editor-wrapper as interface