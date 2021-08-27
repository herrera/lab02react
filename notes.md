modificado ou unstaged -- arquivo alterado mas nao staged 
untracked -- arquivos nao rastreados (novos)
staged(preparado) -- foi marcado para realizar commit por git add
committed 

git commit -ma ' test'  --- faz um add arq rastreados e depois commit 
git rm arq   -- remove o arquivo e git faz add automaticamente para o staged 
    caso tenha sido alterado alteriormente e staged,  e necessario git rm -f arq  para forçar o delete
 git rm --cached arq  - remove o arquivo identico a rm, so q nao apaga localmente e deixa nao rastreavel
 git rm arq1 arq2  -altera nome arquivo e coloca como staged
     é similar a mv arq1 arqv2 , git rm arq1 e git add arq
 git log -p -2   --- -p  mostra as diferencas do commit e -2 os dois ultimos
 git log --stat  --> log com statistica reduzida





