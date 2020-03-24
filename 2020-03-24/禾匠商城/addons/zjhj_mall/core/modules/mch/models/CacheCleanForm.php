<?php
/**
 * Created by IntelliJ IDEA.
 * User: luwei
 * Date: 2017/11/9
 * Time: 15:15
 */

namespace app\modules\mch\models;

class CacheCleanForm extends MchModel
{
    public $data;
    public $pic;
    public $update;

    public function rules()
    {
        return [
            [['data', 'pic', 'update',], 'safe'],
        ];
    }

    public function save()
    {
        if (!$this->validate()) {
            return $this->errorResponse;
        }
        if ($this->data) {
            $dir = \Yii::$app->runtimePath . '/cache';
            $this->delFileUnderDir($dir);
        }
        if ($this->pic) {
            $dir = \Yii::$app->basePath . '/web/temp';
            $this->delFileUnderDir($dir, false, ['.gitignore', 'index.html']);
            $dirRunTime = \Yii::$app->runtimePath . '/temp';
            $this->delFileUnderDir($dirRunTime, false, ['.gitignore', 'index.html']);
        }
        if ($this->update) {
            $dir = \Yii::$app->basePath . '/temp/update';
            $this->delFileUnderDir($dir);
        }
        return [
            'code' => 0,
            'msg' => '操作成功',
        ];
    }


    //循环目录下的所有文件
    private function delFileUnderDir($dirName, $delDir = false, $ignoreList = [])
    {
        if (file_exists("$dirName")) {
            if ($handle = opendir("$dirName")) {
                while (false !== ($item = readdir($handle))) {
                    if ($item != "." && $item != ".." && !in_array($item, $ignoreList)) {
                        if (is_dir("$dirName/$item")) {
                            $this->delFileUnderDir("$dirName/$item", true, $ignoreList);
                        } else {
                            unlink("$dirName/$item");
                        }
                    }
                }
                closedir($handle);
                if ($delDir) {
                    rmdir("$dirName");
                }
            }
        }
    }
}
