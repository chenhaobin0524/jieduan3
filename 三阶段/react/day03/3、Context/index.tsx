// 数据是通过 props 属性自上而下（由父及子）进行传递的，
// 但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），
// 这些属性是应用程序中许多组件都需要的。
// Context 提供了一种在组件之间共享此类值的方式，
// 就能在组件树间进行数据传递的方法。

// Context 可以让我们无需明确地传遍每一个组件，就能将值深入传递进组件树
// 为当前的theme创建一个context（'light'为默认值）
const ThemeContext = React.createContext('light');
class APP extends React.Component {
    render() {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
        // 无论多深，任何组件都能读取这个值。
        // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
        return (
            <ThemeContext.Provider value='dark'>
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

// 中间的组件再也不必指明往下传递 theme 了。
// 函数组件
function Toolbar(props) {
    return (
        <div>
            <ThemeButton />
        </div>

    )
}

class ThemeButton extends React.Component {
    // 指定 contextType 读取当前的 theme context
    // React 会往上找到最近的 theme Provider，然后使用它的值
    // 在这个例子中，当前的 theme 值为‘dark’
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context}></Button>
    }
}

class Button extends React.Component {
    render() {
        return (
            <div>按钮</div>
        )
    }
}

const el = document.querySelector('#demo');
ReactDOM.render(
    <div><APP /></div>
    , el
)