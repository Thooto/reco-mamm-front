<template>
    <div>
        <p>Question {{ question.index }} : {{ question.name }}</p>
        <answer />
    </div>
</template>

<script>
import Answer from './Answer';

export default {
    name: 'question',

    components: { Answer },

    props: ['question'],
}
</script>
