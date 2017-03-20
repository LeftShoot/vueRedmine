/**
 * Created by yiyang1990 on 2017/3/19.
 */

let PMT = {
    _PMT: this.PMT,
    _util: {},              // 帮助类对象
    _data: {},              // 数据库操作类对象
    isdebug: true,          // 调试模式 [非调试模式false]
    isdebuggap: false,      // 是否开启debuggap [默认不开启false]
    _config: {
        baseUrl: '',         // 站点根目录
        // interfaceUrl: 'http://192.168.100.132:90',     //版本根目录
        // interfaceUrl: 'http://192.168.101.146:90',     //版本根目录
        interfaceUrl:'http://pmo.esyun.cn/90',  //版本根目录
        siteUrl:'http://192.168.101.110:8080/tfs/web/UI/Pages/WorkItems/', //bug地址
        service1:'/Service1.svc',
        service2:'/Service2.svc',
        marketingId: 1,
        // 用于原生应用鉴权参数配置
        PARAMS: {
            CLIENT_ID: '1000',
            RESPONSE_TYPE: 'code',
            REDIRECT_URI: 'eap://app?url=src/Default.html'
        }
    }
};

/**
 * 接口配置(增加配置时注意格式)
 */
(function (config) {
    /**********************************************公共接口****************************************************/
    // 项目列表接口
    config.ProjectList = config.interfaceUrl + config.service1 +'/GetProjects';
    // 版本列表接口
    config.GetVersionList = config.interfaceUrl + config.service1 +'/GetVersions';
    // 版本列表接口2
    config.GetVersionView= config.interfaceUrl + config.service1 + '/GetVersionView';
    //版本列表内容接口
    config.VersionContentList = config.interfaceUrl + config.service1 +'/GetVersionBoardIssues';
    //版本列表bug接口
    config.VersionBugNum = config.interfaceUrl + config.service1 +'/GetBugCount';
    //版本任务接口
    config.GetVersionIssues = config.interfaceUrl + config.service1 + '/GetVersionIssues';
    //版本实时进度显示接口
    config.VersionProgress= config.interfaceUrl + config.service1 +'/GetProgressCount';
    //版本任务bug视图接口
    config.BugView = config.interfaceUrl + config.service1 +'/GetBug';
    //导出项目视图报表接口
    config.ExportProjectView = config.interfaceUrl + config.service2 +'/GetProjectView';
    //导出人员视图报表接口
    config.ExportUserView = config.interfaceUrl + config.service2 +'/GetResourceView';
    //用户登录接口
    config.Login= config.interfaceUrl + config.service1 +'/Login';
    //新建任务接口
    config.CreateNewTask= config.interfaceUrl + config.service1 +'/CreateVersionIssue';
    //人员列表获取接口
    config.GetOrgUser= config.interfaceUrl + config.service1 +'/GetOrgUsers';
    //获取子任务内容接口
    config.GetIssues= config.interfaceUrl + config.service1 + '/GetIssues';
    //获取任务(技术支持)类别接口
    config.GetCategories= config.interfaceUrl + config.service1 + '/GetCategories';
    //获取任务状态接口
    config.GetStatuses= config.interfaceUrl + config.service1 + '/GetStatuses';
    //创建子任务接口
    config.CreateSubIssues= config.interfaceUrl + config.service1 + '/CreateSubIssues';
    //删除子任务接口
    config.DeleteIssue= config.interfaceUrl + config.service1 + '/DeleteIssue';
    //更新子任务接口
    config.UpdateIssue= config.interfaceUrl + config.service1 + '/UpdateIssue';
    //获取我的任务接口
    config.GetMyIssues= config.interfaceUrl + config.service1 + '/GetMyIssues';
    //更新我的任务接口
    config.UpdateMyIssue= config.interfaceUrl + config.service1 + '/UpdateMyIssue';
    //获取我的任务Bug汇总接口
    config.GetUserBugCount = config.interfaceUrl + config.service1 + '/GetUserBugCount';
    //获取人员角色列表的接口
    config.GetGroupRoleNameList = config.interfaceUrl + config.service1 + '/GetGroupRoleNameList';
    //获取人员工作日历接口
    config.GetDaysView = config.interfaceUrl + config.service1 + '/GetDaysView';
    //切换任务版本接口
    config.switchVersion = config.interfaceUrl + config.service1 +'/UpdateVersionId';
    //修改父任务描述接口
    config.UpdateIssueDescription =  config.interfaceUrl + config.service1 + '/UpdateIssueDescription';
    //计算工时接口
    config.CalcHour = config.interfaceUrl + config.service1 + '/CalcHour';
    //技术支持列表接口
    config.GetPreSalesIssues = config.interfaceUrl + config.service1 + '/GetPreSalesIssues';
    //新增技术支持接口
    config.CreatePreSalesIssue = config.interfaceUrl + config.service1 + '/CreatePreSalesIssue';
    //修改技术支持接口
    config.UpdatePreSalesIssue = config.interfaceUrl + config.service1 + '/UpdatePreSalesIssue';
    //新增技术支持子任务接口
    config.CreatePreSalesSubIssue = config.interfaceUrl + config.service1 + '/CreatePreSalesSubIssue';
    //报障列表接口
    config.GetBugIssues = config.interfaceUrl + config.service1 + '/GetBugIssues';
    //创建报障接口
    config.CreateBugIssue = config.interfaceUrl + config.service1 + '/CreateBugIssue';
    //修改报障接口
    config.UpdateBugIssue = config.interfaceUrl + config.service1 + '/UpdateBugIssue';
    //上传图片接口
    config.UploadFile = config.interfaceUrl + config.service2 + '/UploadFile';
    //获取图片（附件）列表接口
    config.GetFiles = config.interfaceUrl + config.service2 + '/GetFiles';
    //删除图片（附件）接口
    config.RemoveFile = config.interfaceUrl + config.service2 + '/RemoveFile';
    //显示相关插件接口
    config.GetAppList = config.interfaceUrl + config.service1 + '/GetAppList';
    //显示优先级接口
    config.GetPriorityList = config.interfaceUrl + config.service1 + '/GetPriorityList';
    // 获取运营任务列表接口
    config.GetOperationsIssues = config.interfaceUrl + config.service1 + '/GetOperationsIssues';
    //创建运营任务接口
    config.CreateOperationsIssue = config.interfaceUrl + config.service1 + '/CreateOperationsIssue';
    // 修改运营任务接口
    config.UpdateOperationsIssue = config.interfaceUrl + config.service1 + '/UpdateOperationsIssue';
    //获取总耗时信息接口
    config.GetTotalHours = config.interfaceUrl + config.service1 + '/GetTotalHours';
    //获取耗时列表接口
    config.GetHours = config.interfaceUrl + config.service1 + '/GetHours';
    //创建耗时接口
    config.CreateHour = config.interfaceUrl + config.service1 + '/CreateHour';
    //编辑耗时接口
    config.UpdateHour = config.interfaceUrl + config.service1 + '/UpdateHour';
    //删除耗时接口
    config.DeleteHour = config.interfaceUrl + config.service1 + '/DeleteHour';
    /**********************************************外部接口****************************************************/
    config.WorkItemEdit = config.siteUrl + 'WorkItemEdit.aspx';

})(PMT._config);

export default PMT;