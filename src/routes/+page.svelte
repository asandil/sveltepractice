<script>
	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	}

	$: if (count >= 10) {
		alert("count is dangerously high!");
		count = 0;
	}
</script>

{doubled}
<button on:click={increment}>
	Clicked {count}
	{count === 1 ? "time" : "times"}
</button>
