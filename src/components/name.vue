<template>
    <div class="name">
        <h4>Let's take your full name</h4>
        <form>
            <label for="name">
                <input type="text" id="name">
            </label>
        </form>
    </div>
</template>
<script>
export default {
    name: 'name',
    props: {
        msg: String
    }
}
</script>