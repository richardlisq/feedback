<script>
    export let style = 'primary';
    export let type = 'button';
    export let disabled = false;
</script>

<button {type} {disabled} class={style}>
    <slot></slot>
</button>

<style>
    .primary {
        background-color: #202142;
    }

    .secondary {
        background: #ff6a95;
    }

    button {
        color: #fff;
        border: 0;
        border-radius: 8px;
        color: #fff;
        width: 100px;
        height: 40px;
        cursor: pointer;
    }
    button:hover {
        transform: scale(0.98);
        opacity: 0.9;
    }

    button:disabled {
        background-color: #cccccc;
        color: #333;
        cursor: auto;
    }
</style>