<script lang="ts">
	export let minutes: number = 0;
	export let seconds: number = 0;
</script>

<p>
	{minutes >= 10 ? minutes : `0${minutes}`}:
	{seconds >= 10 ? seconds : `0${seconds}`}
</p>
