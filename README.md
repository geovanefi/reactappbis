# Anotações gerais


##Uso da biblioteca Vite.
- Segundo a Rocksaet essa biblioteca foi sugerida
por permitir usar somente as pastas desejadas.
(link: https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

- o comando dentro da pasta é:
 ( npm create vite@latest reactapp --templete react )

- abrir pasta com VS Code > abrir terminal 
executar o comando npm install
-- apos executar o comando npm run dev

### Pastas
-deixar apenas os arquivos App.jsx e main.jsx
--pode remover o import index.css
--retirar do index.html a linha do favicon


##Usando o typescript
na palicação abrir o terminal e executar:
- npm install typescript --save-dev

### tsconfig.json
- usar a configuração no aquivo a criar fora da src:
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ESNext"
    ],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src"
  ]
}
