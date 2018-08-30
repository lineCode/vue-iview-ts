// Type definitions for iview 3.0.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from 'vue';

export declare class Affix extends Vue {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   * @default 0
   */
  public 'offset-top'?: number;
  /**
   * 距离窗口底部达到指定偏移量后触发
   */
  public 'offset-bottom'?: number;
  /**
   * 在固定状态发生改变时触发
   * @param value true | false
   */
  public $emit(eventName: 'on-change', value: boolean): this;
}
