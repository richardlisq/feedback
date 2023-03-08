<script>
  import { FeedbackStore } from "../stores";
  import { v4 as uuidv4 } from "uuid";
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let text = "";
  let rating = 10;
  let min = 10;
  let message;
  let btnDisabled = true;

  const handleSelect = (e) => (rating = e.detail);

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleSubmit = () => {
    if (text.trim().length >= min) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      };

      FeedbackStore.update((currentFeedback) => {
        return [newFeedback, ...currentFeedback];
      });
      text = "";
    }
  };
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <RatingSelect on:rating-select={handleSelect} />
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Tell us something that keeps you coming back"
      />
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style>
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
    background: none;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    margin-right: 5px;
    padding: 5px;
  }
  input:focus {
    outline: none;
  }
</style>
