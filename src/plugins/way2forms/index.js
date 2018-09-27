import textInput from './text.vue';

const components = {
    textInput
};

components.install = Vue => {
    for (const componentName in components) {
        const component = components[componentName];

        if (component && componentName !== 'install') {
            Vue.component(component.name, component);
        }
    }
};

export default components;
