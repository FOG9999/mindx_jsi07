/**
 * * 1. Share data giữa các component trong React
 * * 1.1. Prop trong react là gì?
 * Prop là một thuộc tính có sẵn trong một component, nó là một object bao gồm các thuộc tính được truyền từ component cha, giúp cho việc chia sẻ
 * thông tin giữa các component được dễ dàng hơn và thuận tiện cho reusable code (tái sử dụng code)
 */

class A extends React.Component {

    state = {
        myState: 'this is state from component A'
    }

    render() {
        return <div>
            This is component A. A has a child component is B:
            <B myProps={this.state.myState} />
        </div>
    }
}

class B extends React.Component {
    render() {
        return <div>
            This is component B. B has props:
            {this.props.myProps}
        </div>
    }
}

/**
 * * 1.2. Tại sao cần sử dụng đến props?
 * Để xây dựng một application, khối lượng code cần sử dụng luôn luôn là rất lớn. Do đó, việc tái sử dụng code là vô cùng cần thiết.
 * Ngoài ra, props giúp cho React có thể chia application ra thành các mảnh nhỏ, dùng lại các mảnh đó trong các component khác
 */

// Page Layout bao gồm Header, Sidebar, Footer và Content
class Header extends React.Component {
    render() {
        // ....
    }
}

class Footer extends React.Component {
    render() {
        // ....
    }
}

class Sidebar extends React.Component {
    render() {
        // ....
    }
}

class PageLayout extends React.Component {
    render() {
        return <div>
            <Header />
            <div className="row">
                {/* Hiển thị sidebar ở một bên trang web */}
                <div className="col-2"><Sidebar /></div>
                {
                    // Hiển thị các thẻ con có trong PageLayout khi nó được tái sử dụng, trong trường hợp này nó là:
                    // <div>This is the content of home page</div>
                    this.props.children
                }
            </div>
            <Footer />
        </div>
    }
}

class HomePage extends React.Component {
    render() {
        return <PageLayout>
            <div>This is the content of home page</div>
        </PageLayout>
    }
}

/**
 * * 2. Stateless and stateful component
 * Stateless: functional component, cú pháp dễ đọc dễ hiểu hơn cho người đã biết về js, không có các side effect khi giảm thiểu các lifecycle methods
 * Stateful: class component, dễ tiếp thu hơn so với lập trình viên lập trình hướng đối tượng khi mới học.
 * 
 * Stateless không có thuộc tính state hay props, mà chỉ có các biến, không có từ khóa this, khồng cần phải viết this.state hay this.props mỗi khi muốn truy cập state hay props
 * 
 * Khuyến khích sử dụng functional component
 */

const FuncComponent = (myProps) => {
    const [myState] = useState('my state')
    return <div>This is a funcitonal component, with props are {myProps} and state is {myState}</div>
}


