import R from 'ramda'
// import F from '../../dist/fractal'
import F from '../../lib'
const h = F.h


let childs = {
  submodule: require('./submodule').default,
}

let moduleDef = F.def({
  name: 'Main',
  init: ({key}) => ({
    key,
    isActive: false,
    ...F.mergeModels(childs),
  }),
  load: (ctx, i, Action) => {
    return R.mapObjIndexed((md, name) => F.createContext(md, {action$: i._childAction(name, md.update)}), childs)
  },
  inputs: {
    _childAction: (ctx, Action, name, update, a) => Action._ChildAction(name, update, a),
  },
  actions: {
    Toggle: [[], R.evolve({isActive: R.not})],
    _ChildAction: [[String, R.T, Array], (name, update, a, m) => R.evolve({[name]: update(a)}, m)],
  },
  interfaces: {
    view: ({styles, _md}, i, m) => h('div', {key: m.key, class: {[styles.base]: true}}, [
      h('div', {
        class: {
          [styles.button.base]: true,
          [styles.button.active]: m.isActive,
        },
        on: {
          click: i._action('Toggle'),
        },
      }, (m.isActive) ? 'nice!! :)' : 'Click me!!'),
      _md.submodule.interfaces.view(m.submodule),
    ]),
  },
  styles: {
    base: {},
    button: {
      base: {
        width: '280px',
        height: '70px',
        margin: '20px',
        fontSize: '38px',
        borderRadius: '35px',
        color: 'white',
        backgroundColor: '#13A513',
        textAlign: 'center',
        transition: 'transform 0.4s',
        cursor: 'pointer',
        ...F.style.absoluteCenter,
        ...F.style.noSelectable,
        '&:hover': {
          color: 'white',
          backgroundColor: 'purple',
          border: '3px solid purple',
          transform: 'perspective(1px) scale(1.1)',
        },
      },
      active: {
        color: 'purple',
        backgroundColor: '#FBFBFB',
        border: '3px solid #13A513',
      },
    },
  },
})

export default moduleDef

if (module.hot) {
  module.hot.dispose(function() {
    moduleDef.dispose()
  })
}
