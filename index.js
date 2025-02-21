var shell = require("shelljs");
var fs = require("fs");

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
}
shell.echo("git 自动化程序");

function gitAuto() {
  shell.exec("git add .");

  if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
    shell.echo(shell.exec('git commit -am "Auto-commit"').code)
    shell.echo("Error: Git commit failed");
    // shell.exit(1);
    shell.exec("git pull");
    shell.exec("git push");
  }

  shell.exec("git pull");

  if (shell.exec("git push").code !== 0) {
    shell.echo("Error: Git push failed");
    shell.exit(1);
  }
  shell.exec("git push");
}

// shell.cd("C:projectpsts-gansu-front");

// gitAuto();


// shell.cd("C:\project\psts-jiangxi-front");

// gitAuto();

shell.cd("C:/project/psts-liaoning-front");

gitAuto();


// shell.cd("C:\project\psts-nmg-front");

// gitAuto();

// shell.cd("C:\project\psts-shanxi01-front");

// gitAuto();


// shell.cd("C:\project\psts-zj-front");

// gitAuto();