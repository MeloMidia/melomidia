@echo off
cd /d "%~dp0"
echo.
echo Iniciando o site da Melo Midia...
echo.
echo Acesse: http://localhost:3002
echo.
echo Deixe esta janela aberta enquanto estiver usando o site.
echo Para parar o servidor, feche esta janela.
echo.
npm.cmd run dev -- --port 3002
echo.
echo O servidor foi encerrado.
pause