modificado ou unstaged -- arquivo alterado mas nao staged 
untracked -- arquivos nao rastreados (novos)
staged(preparado) -- foi marcado para realizar commit por git add
committed 

git commit -ma ' test'  --- faz um add arq rastreados e depois commit 
git rm arq   -- remove o arquivo e git faz add automaticamente para o staged 
    caso tenha sido alterado alteriormente e staged,  e necessario git rm -f arq  para forçar o delete
 
