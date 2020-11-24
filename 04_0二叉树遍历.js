const root = {
	label: 'A',
	children: [
		{
			label: 'B',
			children: [
				{
					label: 'D'
				},
				{
					label: 'E'
				}
			]
		},
		{
			label: 'C',
			children: [
				{
					label: 'F'
				},
				{
					label: 'G'
				}
			]
		}
	]
}
/* 
       A
    B     C
  D   E  F  G
*/

/* 
  递归实现---深度优先遍历
*/
function deepFirstSearch(node, nodeList) {
	if (node) {
		nodeList.push(node)
	}
	if (node.children) {
		for (let i = 0, len = node.children.length; i < len; i++) {
			deepFirstSearch(node.children[i], nodeList)
		}
	}
	return nodeList
}

const results = deepFirstSearch(root, [])
console.log(results.map((_) => _.label))

/* 
  非递归实现---深度优先遍历
*/
function deepFirstSearch2(node) {
	let nodes = []
	if (node) {
		let stack = []
		stack.push(node)
		while (stack.length !== 0) {
			const item = stack.pop()
			nodes.push(item)
			const children = item.children
			if (children) {
				for (let i = children.length - 1; i >= 0; i--) {
					stack.push(children[i])
				}
			}
		}
	}

	return nodes
}
console.log(deepFirstSearch2(root).map((_) => _.label))

function threadFisrtSearch(node) {
	const nodes = []
	if (node) {
		const queue = []
		queue.push(node)
		while (queue.length !== 0) {
			const item = queue.shift()
			nodes.push(item)
			const children = item.children
			if (children && children.length > 0) {
				// 从左到右遍历
				for (let i = 0, len = children.length; i < len; i++) {
					queue.push(children[i])
				}
			}
		}
	}
	return nodes
}

console.log(threadFisrtSearch(root).map((_) => _.label))
