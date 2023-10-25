
let  tree = {
    value: 1,
    children: [ { value: 2,
                  children: [ { value: 3,
                                children: []
                              }
                            ]
                },

                { value: 4,
                  children: [ { value: 5,
                                children: []
                              },
                              {
                                value: 6,
                                children: []
                              }
                            ]
                }
              ]
   }

function memoiazeTotal() {
  let total = 0
  let cache = {}

  
    return function treeTraverse(tree) {
      total += tree.value
      if(tree.children && tree.children.length > 0) {
        for(let i=0;i< tree.children.length ;i++) {
           treeTraverse(tree.children[i])
        }
      }
      return total
     
  }
 
}

let fastMemo = memoiazeTotal()
  

   console.log(fastMemo(tree));
