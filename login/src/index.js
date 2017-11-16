const { Component } =React;
const { render } = ReactDOM;
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const {
  Container,
  Card,
  Field,
  Icon,
  Button,
  List,
  Switch,
  Title
} = AMUI2;


export default class Login extends Component {
  constructor(props) {
    super(props);
    let content = { userName: 'ysp', pwd: '123456' };
    this.state = {
      userName: content.userName,
      pwd: content.pwd
    }
  }

  //记住密码
  savePWDValueChangeHandler(e) {
    let currentTarget = e.currentTarget;
    if (currentTarget.tagName.toLowerCase() === 'input') {
      let handler = this.props.customHandler;
      if (handler) {
        handler({
          eventType: 'savePWDStatus',
          data: currentTarget.checked
        });
      }
    }
  }
  //用户名
  userNameChangeHandler(e) {
    let target = e.target;
    if (target.tagName.toLowerCase() === 'input') {
      let handler = this.props.customHandler;
      if (handler) {
        handler({
          eventType: 'userName',
          data: target.value
        });
        this.setState({
          userName: target.value
        });
      }
    }
  }
  //密码
  pwdChangeHandler(e) {
    let target = e.target;
    if (target.tagName.toLowerCase() === 'input') {
      let handler = this.props.customHandler;
      if (handler) {
        handler({
          eventType: 'pwd',
          data: target.value
        });
        this.setState({
          pwd: target.value
        });
      }
    }
  }
  //提交
  submitHander() {
    let handler = this.props.customHandler;
    if (handler) {
      handler({
        eventType: 'submit'
      });
    }
  }
  render() {
    let content = {
      "savePWDStatus": true,
      "userName": "z100000",
      "pwd": "password",
      "errorTip": "对不起，您的帐号闲置过久,服务器已经自动断开连接,请重新登陆！！"
    }
    return (
      <Card>
        <div>
          <Field
            placeholder="用户名"
            required
            labelBefore={<Icon name="person" />}
            onChange={this.userNameChangeHandler.bind(this)
            }
          />
          <Field
            type="password"
            placeholder="用户名"
            required
            labelBefore={<Icon name="home" />}  
            onChange={this.userNameChangeHandler.bind(this)
            }
          />

        </div>
        <List>
          <List.Item
            title="记住密码"

            after={<Switch checked={content && content.savePWDStatus} onValueChange={this.savePWDValueChangeHandler.bind(this)} />} />
        </List>
        {content && content.errorTip && <Title amStyle="alert" displayLevel="small">{content.errorTip}</Title>}
        <Button
          block
          amStyle="primary"
          onClick={this.submitHander.bind(this)}
        >
          登录
        </Button>

      </Card>
    );
  }
}


render(<Login />, document.getElementById('root'));
