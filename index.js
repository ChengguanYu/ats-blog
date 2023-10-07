$(document).ready(()=>{

    
    $(window).on("resize", function() {
        var pageWidth = window.innerWidth;
        $(".ats-nav-item-line").css('width',pageWidth*0.76);
        //$(".ats-banner").css('height',pageWidth*0.35);
        $(".ats-blogArea").css('width',pageWidth*0.76)
        // $(".ats-banner").css('width',pageWidth);
        console.log("窗口大小发生变化",pageWidth);
      });
      
      $(document).ready(function() {
        const repoOwner = "github_username"; // GitHub用户名
        const repoName = "repository_name"; // 仓库名
        const folderPath = "path/to/folder"; // 文件夹路径

        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`;

        $.get(apiUrl, function(data) {
            const fileList = $("#fileList");
            fileList.empty();

            data.forEach(function(item) {
                if (item.type === "file") {
                    const fileName = item.name;
                    const listItem = $("<li></li>").text(fileName);
                    fileList.append(listItem);
                }
            });
        });
    });


})