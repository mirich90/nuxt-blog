<template>
    <h1>post id is: {{ $route.params.id }}</h1>
</template>

<script>
export default {
    validate({params}) {
        // проверка на число
        return /^\d+$/.test(params.id)
    }
}
</script>