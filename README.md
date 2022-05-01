
---

# svelte-hardhat-typescript


This is a project template for [Svelte](https://svelte.dev) apps with Web3 support using [Hardhat](https://hardhat.org).
It is derived from [sveltejs/template](https://github.com/sveltejs/template) and using the following [hardhat](https://hardhat.org/getting-started) cli "create an advanced sample project that uses Typescript".


## Get started with svelte project

### Setup

To create a new project based on this template using degit:


```bash
npx degit LMKA/svelte-hardhat-typescript
cd svelte-hardhat-typescript
```

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run x-monitor
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the sirv commands in package.json to include the option --host 0.0.0.0.

If you're using [Visual Studio Code](https://code.visualstudio.com/), svelte team recommend installing the official extension [Svelte for VS Code(https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)]. If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

### Single-page app mode

By default, sirv will only respond to requests that match files in public. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for any path. You can make it so by editing the "x-start" command in package.json:

```bash
"x-start": "sirv public --single"
```


## Get started with hardhat project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```bash
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy_Greeter.ts
node scripts/deploy_Greeter.ts
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```bash
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```bash
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
