function Stack() {
	this.stack = []
	this.push = function (node) {
		this.stack.push(node)
	}
	this.pop = function () {
		return this.stack.pop()
	}
	// 获取栈顶指针
	this.top = function () {
		return this.stack[this.stack.length - 1]
	}
	this.isEmpty = function () {
		return this.stack.length === 0
	}
	// return stack
}

function BinaryTree() {
	this.root = null

	function Node(data) {
		/* 分别定义节点数据和左右子节点 */
		this.data = data
		this.left = null
		this.right = null
	}

	var insertNode = function (node, newNode) {
		if (node.data > newNode.data) {
			if (node.left === null) {
				node.left = newNode
			} else {
				insertNode(node.left, newNode)
			}
		} else {
			if (node.right === null) {
				node.right = newNode
			} else {
				insertNode(node.right, newNode)
			}
		}
	}
	this.insert = function (data) {
		let newNode = new Node(data)
		if (this.root === null) {
			this.root = newNode
		} else {
			insertNode(this.root, newNode)
		}
	}

	/* 
    中序遍历
  */
	var inOrderTraverseNode = function (node, callback) {
		if (node !== null) {
			inOrderTraverseNode(node.left, callback)
			callback(node)
			inOrderTraverseNode(node.right, callback)
		}
	}

	/* 中序遍历非递归 */
	var inOrderTraverseNode2 = function (node, callback) {
		try {
			let stack = new Stack()
			let p = node
			// debugger
			while (!stack.isEmpty() || p) {
				while (p) {
					// debugger
					stack.push(p)
					p = p.left
				}
				if (!stack.isEmpty()) {
					p = stack.top()
					const item = stack.pop()
					callback(item)
					p = p.right
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	/* 
    前序遍历---可以用于复制一颗新的树，效率较高
  */
	var preOrderTraverseNode = function (node, callback) {
		if (node !== null) {
			callback(node)
			preOrderTraverseNode(node.left, callback)
			preOrderTraverseNode(node.right, callback)
		}
	}

	/* 
    后续遍历---可以用于一些破坏性的操作， 比如删除节点
  */
	var sufOrderTraverseNode = function (node, callback) {
		if (node !== null) {
			sufOrderTraverseNode(node.left, callback)
			sufOrderTraverseNode(node.right, callback)
			callback(node)
		}
	}

	this.inOrderTraverse = function (callback) {
		inOrderTraverseNode(this.root, callback)
	}
	this.inOrderTraverse2 = function (callback) {
		inOrderTraverseNode2(this.root, callback)
	}
	this.preOrderTraverse = function (callback) {
		preOrderTraverseNode(this.root, callback)
	}
	this.sufOrderTraverse = function (callback) {
		sufOrderTraverseNode(this.root, callback)
	}

	/* 查找最大最小值 */
	var minNode = function (node) {
		if (node) {
			while (node.left !== null && node) {
				node = node.left
			}
			return node.data
		}
	}
	this.min = function () {
		return minNode(this.root)
  }
  /* 查找最大值 */
  
}
var nodes = [8, 3, 3, 10, 1, 6, 14, 4, 7, 13]
// 创建树
var binaryTree = new BinaryTree()

// 插入节点
nodes.forEach(function (key) {
	binaryTree.insert(key)
})

let arr = []
/* binaryTree.inOrderTraverse((node) => {
console.log(node.data)
arr.push(node.data)
}) */
// console.log(binaryTree.root)

/* binaryTree.inOrderTraverse2((node) => {
	console.log(node.data)
}) */

binaryTree.preOrderTraverse((node) => {
	console.log(node.data)
})

console.log(binaryTree.min())
