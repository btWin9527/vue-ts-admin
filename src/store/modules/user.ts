import {VuexModule, Module, Action, Mutation, getModule} from "vuex-module-decorators";
import {login} from "@/api/user";
import store from '@/store';

//export interface 只是对一个东西的声明（不能具体的操作）
//export class 导出一个类 类里面可有参数 ，函数，方法（干一些具体的事情）
export interface IUserState {
  id_token: string
}

// 定义module
@Module({dynamic: true, store, name: 'user'})

class User extends VuexModule implements IUserState {
  public id_token = '';

  // 计算属性
  get getIdToken() {
    return this.id_token;
  }

  @Mutation
  private SET_TOKEN(token: string) {
    //同步存储id_token变量
    this.id_token = token;
  }

  @Action
  public async Login(params: any) {
    let {username, password} = params;
    // @ts-ignore
    const {data} = await login({username, password});
    this.SET_TOKEN(`Bearer ${data.id_token}`);
    console.log(33333333)
  }
}

export const UserModule = getModule(User)
