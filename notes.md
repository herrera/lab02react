modificado ou unstaged -- arquivo alterado mas nao staged 
untracked -- arquivos nao rastreados (novos)
staged(preparado) -- aguardando para realizar o commit por git add
committed 

via git bash --> vermelho local, verde staged..

git commit -am ' test'  --> faz um add arq rastreados para staged e depois commit

git rm arq   --> normalmente teria q 1)apagar o arq de depois 2)add para staged para posterior commit, rm faz isso. 
    caso tenha sido alterado alteriormente e staged,  e necessario git rm -f arq  para forçar o delete
git rm --cached arq  - remove o arquivo identico a rm, so q nao apaga localmente e deixa nao rastreavel
git rm arq1 arq2  -altera nome arquivo e coloca como staged
     é similar a mv arq1 arqv2 , git rm arq1 e git add arq

 git add -p -->  Patch
                opcao s (split) voce pode selecionar conteudo do arquivo q vai para o stage,
                opcao e voce pode alterar conteudo antes de mandar para stage

 git log -p -2   --- -p  mostra as diferencas do commit e -2 os dois ultimos
 git log --stat  --> log com statistica reduzida
 git log --pretty=oneline  -->
 git log --pretty=format:"%h - %an, %ar : %s"  --> mostra 6 dig hash, nome usuario, tempo q foi alterado, nome commit
 git log --pretty=format:"%h %s" --graph  --> mostra grafico ASCII, bom para merge
 git log --oneline hotfix -> log do branch hotfix
git commit --amend --> adiciona ao ultimo commit os arquivos q estao no staged, pode alterar so texto 

git diff  --> diferença entre local e staged
git diff --staged --> diferenca entre staged e committed  (similar a --cached)
git diff hotfix  ==> diferencas com outro branch, no caso hotfix
------------------------------------------------------------------------------------
git remote -v -> lista urls remotos 
git remote add lab  git@github.com:herrera/lab02react.git --> pode usar lab na linha de comando ao inves da url completa
                                                       por exemplo git fetch lab
git remote show lab --> informacao mais detalhada
git tag -a v1.2 -m 'desc' 9fceb02 --> cria uma tag para um commit especifico; Não sao envidadas para o servidor remoto
git push origin v1.1 --> envia a tag para o servidor remoto
git push origin --tags --> envia todas as tags para o servidor remot
git checkout -b version2 v2.0.0 --> cria uma branch com a tag v2.0.0 com o nome version2

git config --global alias.ci commit --> cria um alias (ci) para o comando commit 
git config --global alias.unstage 'reset HEAD --'   --> criacao de comandos 

git merge hotfix --> traz as alteracoes de hotfix para o branch atual. merge fast forward significa 
                    q traz ponteiro pra frente, sem maiores alteraçoes. commit de merge, é criado um
                    novo snapshot (e tem mais de um pai)
git branch -vv  --> lista os branches e o tracking  (informacao local, dar git fetch --all para atualizar)

git fetch --> baixa as alteracoes no servidor q vc ainda nao tem, ele n modificará seu diretorio de trabalho
git pull  -->  é um git fetch seguido de um git merge

git reset --soft HEAD~3 , restaura os tres ultimos commits e deixa na area de stage
git reflog  --> log de referencias

git rebase -i HEAD~3 --> junta os tres ultimos commits em um so
git cherry-pick 9342d2 --> traz o commit de outra branch

