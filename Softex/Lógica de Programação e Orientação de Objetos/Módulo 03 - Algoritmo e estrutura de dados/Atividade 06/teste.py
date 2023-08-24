import random
from tree import BinarySearchTree

def lista1():
    values = [45,20,30,60,81,97,100,7,8,4]
    tree = BinarySearchTree()
    for v in values:
        tree.insert(v)
    return tree

def lista2():
    values = [15,6,18,3,7,16,20,4]
    tree = BinarySearchTree()
    for v in values:
        tree.insert(v)
    return tree

bst = lista1()
bst.inorder_traversal()
# testar remoção da árvore
print('\n----')
v = 81
bst.remove(v)
print("Após remover {}".format(v))
bst.inorder_traversal()
print('\n')




# random.seed(77)
# values = random.sample(range(1, 1000),42)
# Lista1 = [45,20,30,60,81,97,100,7,8,4]
# Lista2 = [15,6,18,3,7,16,20,4]

# bst = BinarySearchTree()
# for v in values:
#   bst.insert(v)

# bst.inorder_traversal()

# #busca por itens da lista
# for item in Lista2:
#   r = bst.search(item)
#   if r is None:
#     print(item, "não encontrado")
#   else:
#     print(r.root.data, 'encontrado')