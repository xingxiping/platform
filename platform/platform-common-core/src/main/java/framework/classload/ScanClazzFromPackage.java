package framework.classload;

/**
 * 扫描加载配置包下面的类
 * 
 * @author Administrator
 *
 */
public class ScanClazzFromPackage {
	
	/**
	 * 获取类加载器
	 * @return
	 */
	public static ClassLoader getClassLoader(){
		return Thread.currentThread().getContextClassLoader();
	}

}
