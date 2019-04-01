const initState = {
    posts: [
        {id:'1', title: 'Lorem', body:'sit amet consectetur adipisicing elit. Autem quo molestiae eaque atque quaerat rem, vitae aperiam dolorum suscipit, sapiente cupiditate, exercitationem placeat sunt modi possimus eveniet minima obcaecati animi.'},
        {id:'2', title: 'Ipsum', body:'sit amet consectetur adipisicing elit. Autem quo molestiae eaque atque quaerat rem, vitae aperiam dolorum suscipit, sapiente cupiditate, exercitationem placeat sunt modi possimus eveniet minima obcaecati animi.'},
        {id:'3', title: 'Dolor', body:'sit amet consectetur adipisicing elit. Autem quo molestiae eaque atque quaerat rem, vitae aperiam dolorum suscipit, sapiente cupiditate, exercitationem placeat sunt modi possimus eveniet minima obcaecati animi.'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;

}

export default rootReducer;

