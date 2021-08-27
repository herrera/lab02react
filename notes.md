modificado ou unstaged -- arquivo alterado mas nao staged 
untracked -- arquivos nao rastreados (novos)
staged(preparado) -- foi marcado para realizar commit por git add
committed 

git commit -am ' test'  --- faz um add arq rastreados e depois commit 
git rm arq   -- remove o arquivo e git faz add automaticamente para o staged 
    caso tenha sido alterado alteriormente e staged,  e necessario git rm -f arq  para forçar o delete
 git rm --cached arq  - remove o arquivo identico a rm, so q nao apaga localmente e deixa nao rastreavel
 git rm arq1 arq2  -altera nome arquivo e coloca como staged
     é similar a mv arq1 arqv2 , git rm arq1 e git add arq
 git log -p -2   --- -p  mostra as diferencas do commit e -2 os dois ultimos
 git log --stat  --> log com statistica reduzida
 git log --pretty=oneline  -->
 git log --pretty=format:"%h - %an, %ar : %s"  --> mostra 6 dig hash, nome usuario, tempo q foi alterado, nome commit
 git log --pretty=format:"%h %s" --graph  --> mostra grafico ASCII, bom para merge

git commit --amend --> adiciona ao ultimo commit os arquivos q estao no staged. 

-----------------------------------------------------------------------------------
git remote -v -> lista urls remotos 
git remote add lab  git@github.com:herrera/lab02react.git --> pode usar lab na linha de comando ao inves da url completa
                                                       por exemplo git fetch lab
git remote show lab --> informacao mais detalhada
git tag -a v1.2 -m 'desc' 9fceb02 --> cria uma tag para um commit especifico; Não sao envidadas para o servidor remoto
git push origin v1.1 --> envia a tag para o servidor remoto




