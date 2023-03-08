<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  let firstName = "Vite";
  let lastName = "Svelte";
  let color = "blue";
  let showText = false;
  let users = [
    {
      id: 1,
      name: 'John'
    },    {
      id: 2,
      name: 'Bob'
    },    {
      id: 3,
      name: 'Tom'
    }
  ]

  $: name = firstName + " + " + lastName;
  
  const toggle = () => {
    color = color === 'blue' ? 'purple': 'blue';
    showText = !showText;
    users = [...users,{ id: '4', name: 'jen'}];
  }
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1 style="color: {color}">Vite + Svelte</h1>
  <button on:click={toggle}>Click to Change Color</button>
  {#each users as user (user.id)}
      <h3>{user.id}: {user.name}</h3>
  {/each}

  <div class="card">
    <Counter />
  </div>
{#if showText}
  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
{:else}
  <p>No Ads</p>
{/if}
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
