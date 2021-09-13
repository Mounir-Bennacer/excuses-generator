<template>
    <div>
        <p
            id="error"
            class="bg-red-200 py-3 px-4 rounded-md font-semibold text-red-600 shadow-md"
        >
            {{ message }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        message: { String, default: '' },
    },
    setup(props) {},
}
</script>
