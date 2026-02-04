	$.ajax(
	{
		type:"GET",
		url:"http://export.arxiv.org/api/query?search_query=au:tikuisis",
		dataType:"xml",
		success:function(X)
		{
			var all='',
			$('entry',X).each(function()
			{
				var title=$.trim($('title',this).text()),
				var authors='',
				$('author',this).each(functon()
				{
					authors.append(', ' + $.trim($('name'),this).text())
				})
				all.append('</p><p>' + title + ' - ' + authors.substring(2))
			})
			console.log(all.substring(4) + '</p>')
		},
		error:function(X){
			console.log(arguments)
		}
	})
